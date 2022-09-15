import { HtmlHead } from "../Components/HtmlHead";

export function NotFound() {
  return (
    <>
      <HtmlHead title="404 Not Found" decription="[insert page description]" />
      <div className="flex flex-col min-h-screen items-center justify-center flex-grow p-8">
        <h1 className="text-8xl font-display font-bold mb-2">404</h1>
        <p className="text-lg font-display font-semilight">
          Halaman tidak ditemukan
        </p>
      </div>
    </>
  );
}
