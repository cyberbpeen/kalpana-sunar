const Card = () => {
  return (
    <div className="resume__card flex">
      <div className="resume__left">
        <div className="resume__date flex">
          <div className="resume__date-from">
            <span className="small-text">From</span>
            <span className="small-text small-text-bold">February 2012</span>
          </div>
          <div className="resume__date-to">
            <span className="small-text">To</span>
            <span className="small-text small-text-bold">September 2016</span>
          </div>
        </div>
        <div className="resume__title">
          <h4>ABC Company</h4>
          <p className="small-text">London elm street 13</p>
        </div>
      </div>
      <div className="resume__right">
        <h4>SENIOR WEB DESIGNER</h4>
        <p className="small-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique,
          incidunt autem. Placeat veniam, voluptatum voluptatem aliquid
          exercitationem ab magnam officiis est dignissimos fugiat, maxime
          quibusdam provident neque saepe, rem pariatur.
        </p>
      </div>
    </div>
  );
};

export default Card;
