using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using TopTests.DAL.Entities;

namespace TopTests.DAL
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Users> Users { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Results> Results { get; set; }
        public DbSet<Subjects> Subjects { get; set; }
        public DbSet<Topics> Topics { get; set; }
        public DbSet<TestQuestions> TestQuestions { get; set; }
        public DbSet<RefreshTokens> RefreshTokens { get; set; }
        public DbSet<FeedBacks> FeedBacks { get; set; }
    }
}
