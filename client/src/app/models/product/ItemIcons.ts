import Vue from 'vue';

export class ItemIcons {
    HasCampaign: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_hasCampaign'),
        icon: "appicon appicon-campaign"
    };
    Fairtrade: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_fairtrade'),
        icon: "custom-icon__fairtrade"
    };
    SwanLabel: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_swanLabel'),
        icon: "appicon appicon-swan-label"
    };
    KeyholeLabel: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_keyhole'),
        icon: "icon-keyhole"
    };
    GMOLabel: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_gmoLabel'),
        icon: ""
    };
    MSCMarkFish: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_mscMarkFish'),
        icon: "custom-icon__msc"
    };
    EUMarkOrganic: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_organic'),
        icon: "custom-icon__eu-organic"
    };
    Sugarfree: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_sugarfree'),
        icon: "appicon appicon-sugar-free"
    };
    LactoseFree: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_lactoseFree'),
        icon: "custom-icon__lactose-free"
    };
    GlutenFree: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_glutenFree'),
        icon: "custom-icon__gluten-free"
    };
    MilkProteinFree: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_milkProteinFree'),
        icon: "appicon appicon-milk-protein-free"
    };
    SojaFree: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_sojaFree'),
        icon: "appicon appicon-soja-free"
    };
    FreeOfEggs: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_freeOfEggs'),
        icon: "appicon appicon-eggs-free"
    };
    FreeOfMilk: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_freeOfMilk'),
        icon: "appicon appicon-free-of-milk"
    };
    PeaProteinFree: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_peaProteinFree'),
        icon: "appicon appicon-pea-protein-free"
    };
    FreeOfProtein: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_freeOfProtein'),
        icon: "appicon appicon-protein-free"
    };
    FreeOfNut: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_freeOfNut'),
        icon: "appicon appicon-nuts-free"
    };
    FreeOfAlmonds: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_freeOfAlmonds'),
        icon: "appicon appicon-almonds-free"
    };
    FreeOfPeanuts: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_freeOfPeanuts'),
        icon: "appicon appicon-peanuts-free"
    };
    Agreement: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_agreement'),
        icon: "appicon appicon-agreement"
    };
    Cool: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_cool'),
        icon: "icon-cool"
    };
    Frost: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_frost'),
        icon: "icon-frost"
    };
    Colonial: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_colonial'),
        icon: "appicon appicon-colonial"
    };
    KravLabel: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_krav'),
        icon: "appicon appicon-krav"
    }
    FromSweden: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_fromSweden'),
        icon: "custom-icon__se"
    }
    SwedishBird: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_swedishBird'),
        icon: "custom-icon__swedish-bird"
    }
    SwedishSeal: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_swedishSeal'),
        icon: "custom-icon__swedish-seal"
    }
    MeatfromSweden: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_meatFromSweden'),
        icon: "custom-icon__meat-from-sweden"
    }
    FSC: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_fsc'),
        icon: "appicon appicon-fsc"
    }
    Vegan: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_vegan'),
        icon: "custom-icon__vegan"
    }
    ASCMarkFish: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_ascMarkFish'),
        icon: "custom-icon__asc"
    }
    Systemköp: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_systemköp'),
        icon: "appicon appicon-systemköp"
    }
    Halal: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_halal'),
        icon: "appicon appicon-halal"
    }
    LocalProduct: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_localProduct'),
        icon: "appicon appicon-local-product"
    }
    SellOut: ItemIcon = {
        label: Vue.filter('translate')('webshop_icons_sellOut'),
        icon: "custom-icon__sell-out"
    }
}

export class ItemIcon {
    label: string;
    icon: string;
}