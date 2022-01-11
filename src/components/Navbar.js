import { Component } from 'react'

const styles = {
    navbar: {
        backgroundColor: ' darkred',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80px',
        justifyContent: 'space-between'
    },
    marvel: {
        marginLeft: '15px',
        color: 'white'
    }
}
class Navbar extends Component {
    render() {
        return (
            <div style={styles.navbar}>
                
                    <h1 href="#news" style={styles.marvel}>Marvel</h1>
                    
                

            </div>
        )
    }
}
export default Navbar 