export interface IBlog {
  sys: {
    id: string;
  };
  fields: {
    blogTitle: string;
    slug: string;
    blogImage: {
        fields: {
            file: {
                url: string
            }
        }
    }
    blogDate: string;
    blogCategory: string;
    blogAuthor: string;
    blogDescription: string;
    blogSummary: string;
  }
}
