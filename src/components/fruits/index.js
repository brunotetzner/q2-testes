export default function WriteFruits({ fruits }) {
  return (
    <ul>
      {fruits.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
}
