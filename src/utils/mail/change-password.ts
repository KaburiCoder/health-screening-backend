export const changePasswordHtml = `<!doctype html>
<html lang="en">
  <head>
    <style>
      body {
        height: 100vh;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #ffffff;
      }

      .wrapper {
        display: block;
        background-color: #faf6ff;
        align-items: center;
        margin: 1rem;
        padding: 1rem;
        border-radius:0.5rem;
        border: 2px solid rgb(249, 224, 255);
        width: 25rem;
      }

      .title {
        color: rgb(173, 85, 255);
        display: flex;
        align-items: center;
      }

      .title h2 {
        width: 100%;
        text-align: center;
        margin: 1rem;
      }

      .description__text {
        color: rgb(160, 100, 255);
      }

      .description__url {
        background-color: white;
        text-align: center;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 1rem;
      }

      .logo {
        width: 100%;
        text-align: center;
      }

      .logo img {
        height: 2.5rem;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="title">
        <h2>@title</h2>
      </div>

      <div class="description">
        <span class="description__text">비밀번호를 재설정하려면 하단의 url을 클릭하여 비밀번호를 변경해주세요.</span>
        <div class="description__url">
          <a href="@url">@url</a>
        </div>
      </div>

      <div class="logo">
        <img src="@logoSrc" alt="logo" />
      </div>
    </div>
  </body>
</html>
`