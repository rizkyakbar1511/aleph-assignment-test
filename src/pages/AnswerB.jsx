const AnswerB = () => {
  return (
    <>
      <h4 className="title">Dropdown Menu</h4>
      <div className="dropdown">
        <div className="dropdown__toggle">Our Works</div>
        <ul className="dropdown__menu">
          <li className="dropdown__item">
            <a className="dropdown__link" href="#">
              UI&UX Design
            </a>
          </li>
          <li className="dropdown__item">
            <a className="dropdown__link" href="#">
              Web Development
            </a>
          </li>
          <li className="dropdown__item">
            <a className="dropdown__link" href="#">
              Mobile Development
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AnswerB;
