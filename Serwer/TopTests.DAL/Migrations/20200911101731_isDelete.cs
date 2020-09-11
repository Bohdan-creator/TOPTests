using Microsoft.EntityFrameworkCore.Migrations;

namespace TopTests.DAL.Migrations
{
    public partial class isDelete : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "isDelete",
                table: "Topics",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isDelete",
                table: "TestQuestions",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isDelete",
                table: "Subjects",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isDelete",
                table: "Topics");

            migrationBuilder.DropColumn(
                name: "isDelete",
                table: "TestQuestions");

            migrationBuilder.DropColumn(
                name: "isDelete",
                table: "Subjects");
        }
    }
}
