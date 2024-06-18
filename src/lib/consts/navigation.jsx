import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineBadgeCheck,
	HiOutlineAdjustments,
	HiOutlineClipboardList,
	HiOutlinePhone,
	HiOutlineSpeakerphone,
	HiOutlineDocumentReport,
	HiOutlineMail,
	
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'expense-manager',
		label: 'Expense Manager',
		path: '/expense-manager',
		icon: <HiOutlineShoppingCart />
	  },
	  {
		key: 'user-management',
		label: 'User Management',
		path: '/user-management',
		icon: <HiOutlineUsers />
	  },
	  {
		key: 'staff-members',
		label: 'Staff Members',
		path: '/staff-members',
		icon: <HiOutlineDocumentText />
	  },
	  {
		key: 'salesmans',
		label: 'Salesmans',
		path: '/salesmans',
		icon: <HiOutlineAnnotation />
	  },
	  {
		key: 'lead-management',
		label: 'Lead Management',
		path: '/lead-management',
		icon: <HiOutlineBadgeCheck />
	  },
	  {
		key: 'call-manager',
		label: 'Call Manager',
		path: '/call-manager',
		icon: <HiOutlinePhone />
	  },
	  {
		key: 'campaigns',
		label: 'Campaigns',
		path: '/campaigns',
		icon: <HiOutlineAdjustments />
	  },
	  {
		key: 'leads-calls',
		label: 'Leads & Calls',
		path: '/leads-calls',
		icon: <HiOutlineClipboardList />
	  },
	  {
		key: 'lead-follow-up',
		label: 'Lead Follow Up',
		path: '/lead-follow-up',
		icon: <HiOutlineSpeakerphone />
	  },
	  {
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	  },
	  {
		key: 'lead-table-fields',
		label: 'Lead Table Fields',
		path: '/lead-table-fields',
		icon: <HiOutlineDocumentReport />
	  },
	  {
		key: 'messaging',
		label: 'Messaging',
		path: '/messaging',
		icon: <HiOutlineMail />
	  },
	
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
