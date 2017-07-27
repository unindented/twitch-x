import {connect} from 'react-redux'
import {gameActions, gameSelectors} from 'twitch-data'
import TopGames from 'twitch-ui/src/components/TopGames'

const mapStateToProps = (state) => ({
  games: gameSelectors.getTopGames(state)
})

const mapDispatchToProps = (dispatch, props) => ({
  loadTopGames: () => {
    dispatch(gameActions.loadTopGames({limit: props.limit}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TopGames)
