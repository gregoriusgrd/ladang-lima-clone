export interface IProductLadangLima {
  sys: {
    id: string;
  };
  fields: {
    productName: string;
    slug: string;
    productDescription: string;
    productImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    features?: IFeatureLadangLima[];
    // article: Document | undefined;
  };
}

export interface IFeatureLadangLima {
    sys: {
        id: string
    };
    fields: {
        featureName: string;
        slug?: string;
        featureImage?: {
            fields: {
                file: {
                    url: string;
                }
            }
        }
    }
}


