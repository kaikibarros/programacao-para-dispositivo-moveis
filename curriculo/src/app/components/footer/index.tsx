import {View } from 'react-native';

interface IFooterProps {
    children: React.ReactNode
}

export const Footer: React.FC<IFooterProps> = ({ children }) => {
    return (
        <View style={{width: '100%', padding: 20, borderTopWidth: 0.5, borderTopColor: '#ccc', alignItems: 'center'}}>
            {children}
        </View>
    );
}

export default Footer;