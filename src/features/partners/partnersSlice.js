import { PARTNERS } from '../../app/shared/PARTNERS';

export const selectAllParteners = () => {
    return PARTNERS;
  };
  
  export const selectFeaturedPartner = () => {
    return PARTNERS.find((partner) => partner.featured);
  };