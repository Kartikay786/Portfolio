import p1image from './images/cynthia.png';
import p2image from './images/Portfolio.png'
import p3image from './images/netflix.png'

const Projectdata = [
    {
        id: '1',
        name: 'Clone Of Netflix',
        imgsrc: p1image,
        gitlink: 'https://github.com/Kartikay786/Clone-of-Cynthia-Website.git'
    },
    {
        id: '2',
        name: 'Portfolio',
        imgsrc: p2image,
        gitlink: ''
    },
    {
        id: '3',
        name: 'Netflix',
        imgsrc: p3image,
        gitlink: ''
    },
]


const Skilldata = [
    {
        id: '1',
        name: 'UI/UX Design',
        img: 'https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/computer.png',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
    },
    {
        id: '2',
        name: 'Web Devlopment',
        img: 'https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/settings.png',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo'
    },
]

const Skilllang = [
    {
        id: '1',
        skillname: 'HTML',
        step: '80',
        image: 'https://e7.pngegg.com/pngimages/5/56/png-clipart-website-development-html5-logo-world-wide-web-consortium-world-wide-web-angle-web-design.png'
    },
    {
        id: '2',
        skillname: 'CSS',
        step: '75',
        image: 'https://w7.pngwing.com/pngs/224/77/png-transparent-website-web-internet-css-style-css3-technology-social-media-logos-i-flat-colorful-icon-thumbnail.png'
    },
    {
        id: '3',
        skillname: 'JAVASCRIPT',
        step: '60',
        image: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png'
    },
    {
        id: '4',
        skillname: 'C',
        step: '70',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'
    },
    {
        id: '5',
        skillname: 'FIGMA',
        step: '60',
        image: 'https://i.pinimg.com/736x/a5/58/b4/a558b426cb8973523f37bbed94cf0f09.jpg'
    },
    {
        id: '6',
        skillname: 'REACT JS',
        step: '55',
        image: 'https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png'
    },
]

export default Projectdata

export { Skilldata, Skilllang }