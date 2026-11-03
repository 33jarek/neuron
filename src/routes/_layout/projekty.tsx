import { createFileRoute } from "@tanstack/react-router";
import { useGitRepos } from "../../hooks/useGitRepos";
import { Icon } from "../../components/Icon";

export const Route = createFileRoute("/_layout/projekty")({
  component: RouteComponent,
});

function RouteComponent() {
  const repos = useGitRepos();

  return (
    <div className="flex flex-col justify-center items-center py-16 px-8">
      <h1 className="text-5xl font-bold mb-8">Projekty</h1>

      {repos.isLoading && (
        <p className="text-muted text-lg mt-4">Ładowanie repozytoriów...</p>
      )}

      {repos.isError && (
        <p className="text-red-400 mt-4">
          Błąd podczas pobierania projektów: {repos.error.message}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mt-4">
        {repos.data?.map((repo) => (
          <a
            key={repo}
            href={`https://github.com/kn-neuron-umg/${repo}`}
            target="_blank"
            className="flex flex-col justify-between bg-black/20 backdrop-blur-xs border-2 border-white/15 shadow-2xl px-6 py-4 rounded-sm transition-all duration-200 hover:border-cyan/40 hover:scale-[1.01] group"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-primary group-hover:text-cyan transition-colors">
                {repo}
              </h2>
              <Icon
                name="github"
                className="h-8 group-hover:text-cyan transition-colors"
              />
            </div>
            <p className="text-muted text-sm mt-3 font-[GeistMono]">
              kn-neuron-umg/{repo}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
