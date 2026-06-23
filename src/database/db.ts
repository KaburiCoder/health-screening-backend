import { loggerError, loggerHttp } from "@/logger/logger";
import dns from "dns";
import mongoose from "mongoose";

// WSL/Hyper-V/ICS 등이 띄운 로컬 DNS 프록시 탓에 Node(c-ares)가 DNS 서버를
// 127.0.0.1로 잡으면 mongodb+srv의 SRV 조회가 ECONNREFUSED로 실패한다.
// 로컬호스트로 잡힌 경우에만 공용 DNS로 보정한다(운영 DNS 설정은 건드리지 않음).
const ensureUsableDnsServers = () => {
  if (process.env.NODE_ENV === "production") return; // 운영에선 시스템 DNS를 그대로 신뢰
  const servers = dns.getServers();
  const isLoopback = (s: string) => s === "127.0.0.1" || s === "::1";
  if (servers.some(isLoopback)) {
    dns.setServers(["8.8.8.8", "168.126.63.1", ...servers.filter((s) => !isLoopback(s))]);
  }
};

const connectDB = async () => {
  try {
    ensureUsableDnsServers();
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    loggerError({ errorCode: "MONGODB_CONN", error });
    process.exit(1);
  }
};

export { connectDB };

