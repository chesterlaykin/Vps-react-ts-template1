import { Counter } from "./Counter";

export { Page };

function Page() {
  return (
    <div>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </div>
  );
}
