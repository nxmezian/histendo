const TimelineNav = ({items, activeIndex, navVisible, onSelect }) => {
      return (
    <div className={`timeline-nav ${navVisible ? 'visible' : ''}`}>
      <button onClick={() => onSelect(0)}>TOP</button>

      {items.map((item, idx) => (
        <button key={idx} onClick={() => onSelect(idx + 1)}>
          <img src={item.logo} alt={`${item.title} logo`} />
        </button>
      ))}
    </div>
  );
};

export default TimelineNav; 