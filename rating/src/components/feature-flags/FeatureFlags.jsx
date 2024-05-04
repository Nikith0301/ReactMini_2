import React ,{useContext}from 'react'
import ImageSlider from '../image-slider/ImageSlider'
import LoadMore from '../load-more/LoadMore'
import QrCode from '../qr-code-gen/QrCode'
import ScrollIndicator from '../scroll-indicator'
import TicTacToe from '../tic-tac-toe/TicTacToe'
import TreeView from '../tree-view/TreeView'
import menus from '../tree-view/data'
import { FeatureFlagsContext } from './context'

export default function FeatureFlags() {

  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

function check(key){
  return enabledFlags[key];
}

const componentsToRender=[

  {key:'showImageSlider',
  component:<ImageSlider/>
  },

  {
    key:'showLoadMore',
    component:<LoadMore/>

  },
  {
    key:'showQrCode',
    component:<QrCode/>
  },
  {
    key:"showScrollIndicator",
    component:<ScrollIndicator/>
  },
  {
    key:"showTicTacToe",
    component:<TicTacToe/>
  },
  {
    key:"showTreeView",
    component:<TreeView menus={menus}/>
  }
]
if (loading) return <h1>Loading data ! Please wait</h1>;
  return (
    <>
    
    <h1>Feature Flags</h1>
    {componentsToRender.map( (item)=>(
check(item.key)?item.component:null
    ))}
    
    
    
    </>
  )
}
