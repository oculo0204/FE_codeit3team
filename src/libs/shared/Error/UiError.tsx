import classNames from "classnames/bind";
import styles from "./UiError.module.scss";
import Icon from "../icon/Icon";

const cx = classNames.bind(styles);

type UiErrorProps = {
  type: "404";
};

const UiError = ({ type }: UiErrorProps) => {
  const ERROR_TYPE_MAP = {
    "404": {
      name: "404",
      alt: "404 icon",
      title: "찾을 수 없는 페이지입니다.",
      content: "요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요.",
    },
  };

  return (
    <div className={cx("container")}>
      <div className={cx("iconWrapper")}>
        <Icon
          name={ERROR_TYPE_MAP[type].name}
          width={355}
          height={156}
          alt={ERROR_TYPE_MAP[type].alt}
        />
      </div>
      <div className={cx("title")}>{ERROR_TYPE_MAP[type].title}</div>
      <div className={cx("content")}>{ERROR_TYPE_MAP[type].content}</div>
    </div>
  );
};

export default UiError;
