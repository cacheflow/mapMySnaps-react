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
end
