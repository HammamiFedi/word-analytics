function SingleStat({ label, number }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
        {number < 0 ? 0 : number}
      </span>
      <h2
        className={`second__heading ${number < 0 && "second__heading--limit"}`}
      >
        {label}
      </h2>
    </section>
  );
}

export default SingleStat;
