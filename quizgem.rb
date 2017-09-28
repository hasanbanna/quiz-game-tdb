require "sinatra"
require 'yaml/store'

get '/' do    
    @store = YAML:Store.new 'recent_scores.yml'
    @scores = @score.transaction{ @store['score']}
    erb :index
end