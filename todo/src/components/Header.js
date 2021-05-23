import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
            <Button color = 'green' text = 'Add'/>
        
        </header>
            
        
    )
}

Header.defaultProps = {
     title: 'To Do List',
 }

Header.propTypes = {
     title: PropTypes.string.isRequired,
    
}
export default Header
