import "./styles.css";

export const Todo = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTodo</p>
        <ul>
          <li>
            <p>Todoです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>Todoです</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <p>完了のTodo</p>
        <ul>
          <li>
            <p>Todoでした</p>
            <button>戻す</button>
          </li>
          <li>
            <p>Todoでした</p>
            <button>戻す</button>{" "}
          </li>
        </ul>
      </div>
    </>
  );
};
