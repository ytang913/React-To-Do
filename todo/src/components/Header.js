import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>

        </header>
            
        
    )
}

Header.defaultProps = {
     title: 'To Do List',
 }

 Header.proptypes = {
     title: PropTypes.string.isRequired
    
}

// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }
export default Header
