import {connect} from 'react-redux'
import {gameActions, gameSelectors} from 'twitch-data'
import GridOfGames from 'twitch-ui/src/components/GridOfGames'

const mapStateToProps = (state) => ({
  games: gameSelectors.getTopGames(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  loadGames: () => {
    dispatch(gameActions.loadTopGames({limit: props.limit}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GridOfGames)
