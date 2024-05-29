import React from 'react'
import {
  ScoreContextValue,
  SetterContextValue,
  initialSetterValue,
  initialScoreValue,
  PlayerMoveContextValue,
  initialPlayerMoveValue
} from './type'

export const ScoreContext =
  React.createContext<ScoreContextValue>(initialScoreValue)

export const useScoreContext = () => {
  return React.useContext(ScoreContext)
}

export const SetterContext =
  React.createContext<SetterContextValue>(initialSetterValue)

export const useSetterContext = () => {
  return React.useContext(SetterContext)
}

export const PlayerMoveContext = React.createContext<PlayerMoveContextValue>(
  initialPlayerMoveValue
)

export const usePlayerMoveContext = () => {
  return React.useContext(PlayerMoveContext)
}
