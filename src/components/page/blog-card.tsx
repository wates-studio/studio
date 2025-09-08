import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BlogCard() {
  return (
    <Card>
      <CardHeader>
        <img src="https://via.placeholder.com/400x200" alt="Blog Post Image" className="rounded-t-lg" />
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
