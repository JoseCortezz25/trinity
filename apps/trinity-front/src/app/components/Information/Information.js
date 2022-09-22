import imageCoverProgrammer from 'apps/trinity-front/src/assets/programmer.svg';

import './Information.css';

const Information = () => {
  return (
    <section className="Information">
      <div className="container">
        <div className="boxImage">
          <img src={imageCoverProgrammer} alt="" />
        </div>
        <div className="boxInfo">
          <h2>Lorem ipsum dolor sit amet. Ut molestiae perferendis.</h2>
          <p>
            Lorem ipsum dolor sit amet. Eos voluptatum nostrum et illum nostrum
            aut possimus exercitationem et fugit Quis ea nesciunt minus ut
            officia amet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Information;
