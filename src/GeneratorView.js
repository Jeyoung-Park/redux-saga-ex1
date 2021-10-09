import "./Generator.css";

function* generatorFunction() {
  console.log("안녕하세요?");
  yield 1;
  console.log("제네레이터 함수");
  yield 2;
  console.log("function*");
  yield 3;
  return 4;
}

function* watchGenerator() {
  console.log("모니터링 시작");
  while (true) {
    const action = yield;
    if (action.type === "HELLO") {
      console.log("안녕하세요?");
    }
    if (action.type === "BYE") {
      console.log("안녕히 가세요.");
    }
  }
}

function GeneratorView() {
  const generator = generatorFunction();
  const watch = watchGenerator();

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
          console.log(generator.next());
        }}
        className="button"
      >
        generator 함수 실행
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(watch.next());
        }}
        className="button"
      >
        watch 제네레이터 모니터링 실행
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(watch.next({ type: "HELLO" }));
        }}
        className="button"
      >
        watch 제네레이터 type HELLO
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(watch.next({ type: "BYE" }));
        }}
        className="button"
      >
        watch 제네레이터 type BYE
      </button>
    </div>
  );
}

export default GeneratorView;
