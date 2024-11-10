import style from "./Loading.module.scss";

type Props = {
  color?: string;
  size?: number;
};

export function Loading({ color, size }: Props) {
  return (
    <div
      style={size ? { width: size, height: size } : {}}
      className={style.loadingContainer}
    >
      <div
        className={style.loading}
        style={{ borderColor: color || undefined }}
      ></div>
    </div>
  );
}
