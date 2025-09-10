import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export default function BlogCard() {
  const { blog_placeholder_1 } = placeholderImages;
  return (
    <Card>
      <CardHeader>
        <Image 
          src={blog_placeholder_1.src} 
          alt={blog_placeholder_1.alt}
          width={400}
          height={200}
          className="rounded-t-lg object-cover" 
          data-ai-hint={blog_placeholder_1.hint}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-2xl font-bold mb-2">Blog Post Title</h2>
        <p className="text-muted-foreground">A short description of the blog post goes here. This should be a brief summary of the content.</p>
      </CardContent>
      <CardFooter>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
