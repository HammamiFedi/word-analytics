import SingleStat from "./SingleStat";

function Stats({ stats }) {
  const {
    numberOfCharacters,
    numberOfWords,
    instagramCharactersLeft,
    facebookCharactersLeft,
  } = stats;

  return (
    <section className="stats">
      <SingleStat label="words" number={numberOfWords} />
      <SingleStat label="Characters" number={numberOfCharacters} />
      <SingleStat label="Facebook" number={facebookCharactersLeft} />
      <SingleStat label="Instagram" number={instagramCharactersLeft} />
    </section>
  );
}

export default Stats;
