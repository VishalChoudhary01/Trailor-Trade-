export type MenuLabel = "Models" | "Technology" | "Support" | "Company";

export interface NavigationItem {
  label: MenuLabel;
  options: readonly string[];
}

const menuItems: readonly NavigationItem[] = [
  { 
    label: 'Models', 
    options: ['Urban Commander', 'Adventure Seeker', 'Touring Edition', 'Eco Innovator'] 
  },
  { 
    label: 'Technology', 
    options: ['Performance', 'Safety Features', 'Smart Connectivity', 'Eco Technology'] 
  },
  { 
    label: 'Support', 
    options: ['Service Centers', 'Owner Manuals', 'Warranty', 'Contact Support'] 
  },
  { 
    label: 'Company', 
    options: ['Our Story', 'Careers', 'Press', 'Sustainability'] 
  },
];
export default menuItems;