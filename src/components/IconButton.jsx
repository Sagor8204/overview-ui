export default function IconButton({ icon: Icon, style }) {
  return <button>{<Icon className={style} />}</button>;
}
