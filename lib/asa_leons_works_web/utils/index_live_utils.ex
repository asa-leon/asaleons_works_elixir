defmodule AsaLeonsWorksWeb.IndexLiveUtils do
	@doc """
	Generates a page title strgin based on the specified LiveView module atom,
	"""
	def page_title(view_atom) when is_atom(view_atom) do
		view_atom
		|> Phoenix.Naming.resource_name("Live")
		|> Phoenix.Naming.humanize()
	end
end
