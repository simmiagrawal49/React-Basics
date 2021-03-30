import "./styles.css";
function Welcome(propst) {
  return <h1>Hello, {propst.name}</h1>;
}
export default function App(props) {
  return <><h1>Hello, {props.name}</h1>
  <Welcome name="Sara" />
  <Welcome name="Cahal" />
  <Welcome name="Edite" /></>;
}
