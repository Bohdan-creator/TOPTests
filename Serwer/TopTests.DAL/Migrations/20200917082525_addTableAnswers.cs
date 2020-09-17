using Microsoft.EntityFrameworkCore.Migrations;

namespace TopTests.DAL.Migrations
{
    public partial class addTableAnswers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Answer",
                table: "TestQuestions");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "TestQuestions");

            migrationBuilder.AddColumn<string>(
                name: "Question",
                table: "TestQuestions",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Answers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TestQuestionsId = table.Column<int>(nullable: false),
                    Answer = table.Column<string>(nullable: true),
                    isCorrect = table.Column<bool>(nullable: false),
                    isDelete = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Answers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Answers_TestQuestions_TestQuestionsId",
                        column: x => x.TestQuestionsId,
                        principalTable: "TestQuestions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Answers_TestQuestionsId",
                table: "Answers",
                column: "TestQuestionsId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Answers");

            migrationBuilder.DropColumn(
                name: "Question",
                table: "TestQuestions");

            migrationBuilder.AddColumn<string>(
                name: "Answer",
                table: "TestQuestions",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "TestQuestions",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
