function Content() {
  return (
    <div className=" biz-body flex container">
      <div className="biz-img">
        <img className="profile-img" src="./IMG_6085.JPG" alt="image" />
      </div>

      <div className="biz-info">
        <h2>Nana Owusu Agyei</h2>
        <h3>Frontend Developer</h3>
        <p>
          <a target="_blank" href="https://nokofio.me/nanaagyei">
            Nokofio.me/Nana Owusu Agyei
          </a>
        </p>
      </div>

      <div className="social-profile">
        <button className="email">
          <img src="./Mail.png" alt="" />
          <h2>Email</h2>
        </button>

        <button className="linkedIn">
          <img src="./linkedin.png" alt="" />
          <h2>LinkedIn</h2>
        </button>
      </div>

      <div className="about-me">
        <div>
          <h2>About</h2>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>

        <div>
          <h2>Interests</h2>
          <p>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
