class ApisController < ApplicationController

  def index
    @data = File.read("public/retailers.json")
    respond_to do |format|
      format.html
      format.json {render json: @data}
    end
  end

  def new
  end

  def cities
    @cities = File.read("public/cities.json")
    respond_to do |format|
      format.html
      format.json {render json: @cities}
    end
  end 
end
