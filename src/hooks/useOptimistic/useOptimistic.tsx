import React from "react";
import { useOptimistic } from "react";

type Post = {
  id: number;
  title: string;
  liked: boolean;
};

const mockServerUpdate = (postId: number, liked: boolean): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(liked); 
    }, 1000);
  });
};

const postsData: Post[] = [
  { id: 1, title: "اولین پست", liked: false },
  { id: 2, title: "دومین پست", liked: false },
  { id: 3, title: "سومین پست", liked: false },
];

const OptimisticLikes: React.FC = () => {
  
  const [posts, updatePosts] = useOptimistic(postsData, (draft: Post[], action: { type: "toggle"; id: number }) => {
    switch (action.type) {
      case "toggle":
        return draft.map(post =>
          post.id === action.id ? { ...post, liked: !post.liked } : post
        );
      default:
        return draft;
    }
  });

  const handleLike = async (id: number) => {
    // آپدیت خوش‌بینانه
    updatePosts({ type: "toggle", id });

    // شبیه‌سازی درخواست سرور
    const post = posts.find(p => p.id === id);
    if (!post) return;

    const serverResult = await mockServerUpdate(id, !post.liked);

    // در صورت نیاز rollback یا هماهنگی
    if (serverResult !== !post.liked) {
      updatePosts({ type: "toggle", id });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">لیست پست‌ها</h2>
      <ul className="list-group">
        {posts.map((post : any) => (
          <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
            {post.title}
            <button
              className={`btn ${post.liked ? "btn-success" : "btn-outline-secondary"}`}
              onClick={() => handleLike(post.id)}
            >
              {post.liked ? "❤️ Liked" : "♡ Like"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimisticLikes;
