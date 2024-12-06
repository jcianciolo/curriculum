import Hello from "../components/hello";

export default function Home() {
  console.log("What is this? Server or client?");
  return (
    <>
      <h1 className="text-3xl">Welcome to NextJS 15</h1>
      <Hello />
    </>
  );
}
