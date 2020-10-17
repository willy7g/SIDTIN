import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

import IconSales from '@material-ui/icons/MonetizationOn'
import IconProfile from '@material-ui/icons/AccountBox'
import IconAccount from '@material-ui/icons/AccountBalance' //
import IconAdmin from '@material-ui/icons/VpnKey'
import IconMisc from '@material-ui/icons/MoreHoriz'

import IconDashboard from '@material-ui/icons/Dashboard'
import IconProducts from '@material-ui/icons/LocalMall'
import IconOrders from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconPersonalVideo from '@material-ui/icons/PersonalVideo'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import IconQuestionAnswer from '@material-ui/icons/QuestionAnswer'
import IconStars from '@material-ui/icons/Stars'
import IconNewReleases from '@material-ui/icons/NewReleases'
import IconSettings from '@material-ui/icons/Settings'
import IconGroup from '@material-ui/icons/Group'
import IconInfo from '@material-ui/icons/Info' //
import IconPreson from '@material-ui/icons/Person' //
// import IconSync from '@material-ui/icons/Sync'
// import IconPhone from '@material-ui/icons/Phone'
import IconStock from '@material-ui/icons/LocalShipping'
import IconLocation from '@material-ui/icons/LocationOn'

import { Theme } from '_theme'
import SidebarNavItems from './SidebarNavItems'

export interface SidebarNavProps {
  isCollapsed: boolean
}

const SidebarNav = (props: SidebarNavProps) => {
  const { isCollapsed } = props
  const classes = useStyles()




  const itemsSales = [




    {
      name: 'Dashboard',
      link: '/sales/dashboard',
      Icon: IconDashboard,
    },
    




    {
      name: 'Admin',
      Icon: IconProducts,
      items: [
        {
          name: 'Categoria',
          link: '/sales/orders',
          Icon: IconOrders,
        },
        {
          name: 'Tipo Solicitud',
          link: '/sales/customers',
          Icon: IconPeople,
        },
        {
          name: 'Departamento o Unidad',
          link: '/sales/products',
          Icon: IconGroup,
        },
        {
          name: 'Persona',
          link: '/sales/products/new',
          Icon: IconGroup,
        },
        {
          name: 'Rol o Perfil',
          link: '/sales/products/categories',
          Icon: IconGroup,
        },
        {
          name: 'Prioridad Ticket',
          link: '/sales/stock',
          Icon: IconStock,
        },
        {
          name: 'Administrar Tickets',
          link: '/sales/locations',
          Icon: IconLocation,
        },

      ],
    },





    
    
  ]



  const itemsProfile = [
    {
      name: 'Enviar Ticket',
      link: '/demo/features',
      Icon: IconInfo,
    },
    {
      name: 'Miss Ticket',
      link: '/demo/supporters',
      Icon: IconSettings,
    },
  ]

  const itemsOrganizations = [
    {
      name: 'Tickets',
      link: '/demo/docs',
      Icon: IconInfo,
    },
    
  ]

  const itemsAuth = [
    {
      name: 'Enviar Solicitud',
      link: '/auth/login',
    },
    {
      name: 'Miss Solicitudes',
      link: '/auth/signup',
    },
  
  ]

  const itemsAdmin = [
    {
      name: 'Enviar Solicitud',
      link: '/admin/dashboard',
      Icon: IconDashboard,
    },
    {
      name: 'Miss Solicitudes',
      link: '/demo/discuss',
      Icon: IconAccount,
    },
    
  ]




  const itemsCoreModules = [
   
    {
      name: 'Soporte',
      items: itemsProfile,
      Icon: IconProfile,
    },
    {
      name: 'Técnico',
      items: itemsOrganizations,
      Icon: IconAccount,
    },
    {
      name: 'Solicitud',
      items: itemsAdmin,
      Icon: IconAdmin,
    },
    
  ]



















  return (
    <div>
      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
            Aplicaicones
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsSales} />
      </List>

      <List className={classes.navList} disablePadding>
        {!isCollapsed && (
          <ListSubheader disableSticky={true} className={classes.navListHeader}>
           
          </ListSubheader>
        )}
        <SidebarNavItems isCollapsed={isCollapsed} items={itemsCoreModules} />
      </List>

      

    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navList: {
      width: theme.sidebar.width,
      fontSize: '1.1em',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
    },
    navListHeader: {
      textAlign: 'center',
    },
    iconFeatures: {
      color: '#95de3c',
    },
    iconDocs: {
      color: '#f8cda9',
    },
    iconSupporters: {
      color: '#e3b546',
    },
    iconDiscuss: {
      color: '#ccc',
    },
  }),
)

export default SidebarNav
