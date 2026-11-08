import { createFileRoute } from "@tanstack/react-router";
import { useGitRepos } from "../../hooks/useGitRepos";
import { Icon } from "../../components/Icon";

export const Route = createFileRoute("/_layout/projekty")({
  component: RouteComponent,
});

function RouteComponent() {
  const repos = useGitRepos();
  const dateFormatter = new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "medium",
  });

  return (
    <div className="flex flex-col justify-center items-center py-12 sm:py-16 px-4 sm:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
        Projekty
      </h1>

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
            key={repo.name}
            href={`https://github.com/kn-neuron-umg/${repo.name}`}
            target="_blank"
            className="flex min-w-0 flex-col justify-between bg-black/20 backdrop-blur-xs border-2 border-white/15 shadow-2xl px-4 sm:px-6 py-4 rounded-sm transition-all duration-200 hover:border-cyan/40 hover:scale-[1.01] group"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="min-w-0 wrap-break-word text-lg sm:text-xl font-bold text-primary group-hover:text-cyan transition-colors">
                {repo.name}
              </h2>
              <Icon
                name="github"
                className="h-8 group-hover:text-cyan transition-colors"
              />
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-muted text-xs sm:text-sm font-[GeistMono]">
              <span className="flex items-center gap-1">
                <Icon name="star" className="h-4 w-4" />
                {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="fork" className="h-4 w-4" />
                {repo.forks_count}
              </span>
              <time dateTime={repo.pushed_at}>
                commit: {dateFormatter.format(new Date(repo.pushed_at))}
              </time>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
