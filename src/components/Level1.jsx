import { Level2 } from "./Level2";

export function Level1(props) {
  return (
    <div>
      <div>Niveau de profondeur 1</div>
      <Level2 />
    </div>
  );
}
