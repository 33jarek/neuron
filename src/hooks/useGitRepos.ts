import { useQuery } from "@tanstack/react-query";

interface Repo {
  name: string;
}

export const useGitRepos = () => {
  return useQuery({
    queryKey: ["GitRepos"],
    queryFn: async (): Promise<string[]> => {
      const res = await fetch(
        "https://api.github.com/orgs/kn-neuron-umg/repos",
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        },
      );

      if (!res.ok) {
        throw new Error(`Błąd pobierania repozytoriów: ${res.status}`);
      }

      const data: Repo[] = await res.json();

      return data.map((repo) => repo.name);
    },
  });
};
