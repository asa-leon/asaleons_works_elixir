defmodule AsaLeonsWorksWeb.PageController do
  use AsaLeonsWorksWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
