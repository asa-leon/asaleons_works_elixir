defmodule AsaLeonsWorksWeb.IndexLive do
	use AsaLeonsWorksWeb, :live_view

	# Humanize title from module atom
	@default_assigns [
		page_title: AsaLeonsWorksWeb.IndexLiveUtils.page_title(__MODULE__),
	]

	def mount(_params, _session, socket) do

		socket = assign(socket, @default_assigns)
		{:ok, socket}
	end
end