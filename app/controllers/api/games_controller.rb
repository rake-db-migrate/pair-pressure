class Api::GamesController < ApplicationController
  def save
    if params[:game][:token]
      game = Game.find_by token: params[:game][:token]
      game.update game_params
    else
      game = Game.new game_params
    end

    game.save

    render json: game.token
  end

  def load
    game = Game.find_by token: params[:token]
    render json: {
      cards: game.cards,
      currentCard: game.current_card,
    }
  end

  private

  def game_params
    params.require(:game).permit(:cards, :current_card, :token)
  end
end
