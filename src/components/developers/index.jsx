export default function Developer({ name, age, country }) {
  return (
    <ul>
      <li>
        <label>{name}</label>
      </li>
      <li>
        <label>{age}</label>
      </li>
      <li>
        <label>{country}</label>
      </li>
    </ul>
  );
}
